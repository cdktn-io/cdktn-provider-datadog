# `dataDatadogReferenceTableRows` Submodule <a name="`dataDatadogReferenceTableRows` Submodule" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTableRows <a name="DataDatadogReferenceTableRows" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/reference_table_rows datadog_reference_table_rows}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

new dataDatadogReferenceTableRows.DataDatadogReferenceTableRows(scope: Construct, id: string, config: DataDatadogReferenceTableRowsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig">DataDatadogReferenceTableRowsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig">DataDatadogReferenceTableRowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows">putRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetRows">resetRows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRows` <a name="putRows" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows"></a>

```typescript
public putRows(value: IResolvable | DataDatadogReferenceTableRowsRows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]

---

##### `resetRows` <a name="resetRows" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetRows"></a>

```typescript
public resetRows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogReferenceTableRows resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogReferenceTableRows resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogReferenceTableRows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogReferenceTableRows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/reference_table_rows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTableRows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rows">rows</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList">DataDatadogReferenceTableRowsRowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIdsInput">rowIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowsInput">rowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIds">rowIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rows"></a>

```typescript
public readonly rows: DataDatadogReferenceTableRowsRowsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList">DataDatadogReferenceTableRowsRowsList</a>

---

##### `rowIdsInput`<sup>Optional</sup> <a name="rowIdsInput" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIdsInput"></a>

```typescript
public readonly rowIdsInput: string[];
```

- *Type:* string[]

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowsInput"></a>

```typescript
public readonly rowsInput: IResolvable | DataDatadogReferenceTableRowsRows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `rowIds`<sup>Required</sup> <a name="rowIds" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIds"></a>

```typescript
public readonly rowIds: string[];
```

- *Type:* string[]

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableRowsConfig <a name="DataDatadogReferenceTableRowsConfig" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.Initializer"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableRowsConfig: dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rowIds">rowIds</a></code> | <code>string[]</code> | List of primary key values (row IDs) to retrieve. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.tableId">tableId</a></code> | <code>string</code> | The UUID of the reference table to query rows from. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rows">rows</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]</code> | rows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rowIds`<sup>Required</sup> <a name="rowIds" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rowIds"></a>

```typescript
public readonly rowIds: string[];
```

- *Type:* string[]

List of primary key values (row IDs) to retrieve.

These are the values of the table's primary key field(s). Maximum 250 IDs per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/reference_table_rows#row_ids DataDatadogReferenceTableRows#row_ids}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The UUID of the reference table to query rows from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/reference_table_rows#table_id DataDatadogReferenceTableRows#table_id}

---

##### `rows`<sup>Optional</sup> <a name="rows" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rows"></a>

```typescript
public readonly rows: IResolvable | DataDatadogReferenceTableRowsRows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]

rows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/reference_table_rows#rows DataDatadogReferenceTableRows#rows}

---

### DataDatadogReferenceTableRowsRows <a name="DataDatadogReferenceTableRowsRows" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows.Initializer"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableRowsRows: dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableRowsRowsList <a name="DataDatadogReferenceTableRowsRowsList" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

new dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get"></a>

```typescript
public get(index: number): DataDatadogReferenceTableRowsRowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableRowsRows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>[]

---


### DataDatadogReferenceTableRowsRowsOutputReference <a name="DataDatadogReferenceTableRowsRowsOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTableRows } from '@cdktn/provider-datadog'

new dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.values">values</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.values"></a>

```typescript
public readonly values: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableRowsRows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>

---



