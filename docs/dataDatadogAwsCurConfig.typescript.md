# `dataDatadogAwsCurConfig` Submodule <a name="`dataDatadogAwsCurConfig` Submodule" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAwsCurConfig <a name="DataDatadogAwsCurConfig" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

new dataDatadogAwsCurConfig.DataDatadogAwsCurConfig(scope: Construct, id: string, config: DataDatadogAwsCurConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig">DataDatadogAwsCurConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig">DataDatadogAwsCurConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogAwsCurConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogAwsCurConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogAwsCurConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogAwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogAwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountFilters">accountFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference">DataDatadogAwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.errorMessages">errorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportName">reportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportPrefix">reportPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountFilters`<sup>Required</sup> <a name="accountFilters" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountFilters"></a>

```typescript
public readonly accountFilters: DataDatadogAwsCurConfigAccountFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference">DataDatadogAwsCurConfigAccountFiltersOutputReference</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

---

##### `reportPrefix`<sup>Required</sup> <a name="reportPrefix" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportPrefix"></a>

```typescript
public readonly reportPrefix: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.statusUpdatedAt"></a>

```typescript
public readonly statusUpdatedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountIdInput"></a>

```typescript
public readonly cloudAccountIdInput: number;
```

- *Type:* number

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAwsCurConfigAccountFilters <a name="DataDatadogAwsCurConfigAccountFilters" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters.Initializer"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

const dataDatadogAwsCurConfigAccountFilters: dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters = { ... }
```


### DataDatadogAwsCurConfigConfig <a name="DataDatadogAwsCurConfigConfig" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.Initializer"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

const dataDatadogAwsCurConfigConfig: dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>number</code> | The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: number;
```

- *Type:* number

The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/aws_cur_config#cloud_account_id DataDatadogAwsCurConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAwsCurConfigAccountFiltersOutputReference <a name="DataDatadogAwsCurConfigAccountFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```typescript
import { dataDatadogAwsCurConfig } from '@cdktn/provider-datadog'

new dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includedAccounts">includedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">includeNewAccounts</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters">DataDatadogAwsCurConfigAccountFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `includedAccounts`<sup>Required</sup> <a name="includedAccounts" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```typescript
public readonly includedAccounts: string[];
```

- *Type:* string[]

---

##### `includeNewAccounts`<sup>Required</sup> <a name="includeNewAccounts" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```typescript
public readonly includeNewAccounts: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogAwsCurConfigAccountFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters">DataDatadogAwsCurConfigAccountFilters</a>

---



