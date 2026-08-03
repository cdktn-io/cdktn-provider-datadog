# `dataDatadogActionConnection` Submodule <a name="`dataDatadogActionConnection` Submodule" id="@cdktn/provider-datadog.dataDatadogActionConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogActionConnection <a name="DataDatadogActionConnection" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection datadog_action_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnection(scope: Construct, id: string, config: DataDatadogActionConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig">DataDatadogActionConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig">DataDatadogActionConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetHttp">resetHttp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putHttp` <a name="putHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp"></a>

```typescript
public putHttp(value: DataDatadogActionConnectionHttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---

##### `resetHttp` <a name="resetHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetHttp"></a>

```typescript
public resetHttp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogActionConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

dataDatadogActionConnection.DataDatadogActionConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogActionConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogActionConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogActionConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogActionConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference">DataDatadogActionConnectionAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.asana">asana</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference">DataDatadogActionConnectionAsanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference">DataDatadogActionConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference">DataDatadogActionConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.circleCi">circleCi</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference">DataDatadogActionConnectionCircleCiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.clickup">clickup</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference">DataDatadogActionConnectionClickupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cloudflare">cloudflare</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference">DataDatadogActionConnectionCloudflareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.configCat">configCat</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference">DataDatadogActionConnectionConfigCatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.datadog">datadog</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference">DataDatadogActionConnectionDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fastly">fastly</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference">DataDatadogActionConnectionFastlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.freshservice">freshservice</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference">DataDatadogActionConnectionFreshserviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference">DataDatadogActionConnectionGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gemini">gemini</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference">DataDatadogActionConnectionGeminiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gitlab">gitlab</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference">DataDatadogActionConnectionGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.greyNoise">greyNoise</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference">DataDatadogActionConnectionGreyNoiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.http">http</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference">DataDatadogActionConnectionHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.launchDarkly">launchDarkly</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference">DataDatadogActionConnectionLaunchDarklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.notion">notion</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference">DataDatadogActionConnectionNotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.okta">okta</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference">DataDatadogActionConnectionOktaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference">DataDatadogActionConnectionOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference">DataDatadogActionConnectionServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.split">split</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference">DataDatadogActionConnectionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.statsig">statsig</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference">DataDatadogActionConnectionStatsigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.virusTotal">virusTotal</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference">DataDatadogActionConnectionVirusTotalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.httpInput">httpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `anthropic`<sup>Required</sup> <a name="anthropic" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.anthropic"></a>

```typescript
public readonly anthropic: DataDatadogActionConnectionAnthropicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference">DataDatadogActionConnectionAnthropicOutputReference</a>

---

##### `asana`<sup>Required</sup> <a name="asana" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.asana"></a>

```typescript
public readonly asana: DataDatadogActionConnectionAsanaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference">DataDatadogActionConnectionAsanaOutputReference</a>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.aws"></a>

```typescript
public readonly aws: DataDatadogActionConnectionAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference">DataDatadogActionConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.azure"></a>

```typescript
public readonly azure: DataDatadogActionConnectionAzureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference">DataDatadogActionConnectionAzureOutputReference</a>

---

##### `circleCi`<sup>Required</sup> <a name="circleCi" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.circleCi"></a>

```typescript
public readonly circleCi: DataDatadogActionConnectionCircleCiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference">DataDatadogActionConnectionCircleCiOutputReference</a>

---

##### `clickup`<sup>Required</sup> <a name="clickup" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.clickup"></a>

```typescript
public readonly clickup: DataDatadogActionConnectionClickupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference">DataDatadogActionConnectionClickupOutputReference</a>

---

##### `cloudflare`<sup>Required</sup> <a name="cloudflare" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cloudflare"></a>

```typescript
public readonly cloudflare: DataDatadogActionConnectionCloudflareOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference">DataDatadogActionConnectionCloudflareOutputReference</a>

---

##### `configCat`<sup>Required</sup> <a name="configCat" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.configCat"></a>

```typescript
public readonly configCat: DataDatadogActionConnectionConfigCatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference">DataDatadogActionConnectionConfigCatOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.datadog"></a>

```typescript
public readonly datadog: DataDatadogActionConnectionDatadogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference">DataDatadogActionConnectionDatadogOutputReference</a>

---

##### `fastly`<sup>Required</sup> <a name="fastly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fastly"></a>

```typescript
public readonly fastly: DataDatadogActionConnectionFastlyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference">DataDatadogActionConnectionFastlyOutputReference</a>

---

##### `freshservice`<sup>Required</sup> <a name="freshservice" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.freshservice"></a>

```typescript
public readonly freshservice: DataDatadogActionConnectionFreshserviceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference">DataDatadogActionConnectionFreshserviceOutputReference</a>

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gcp"></a>

```typescript
public readonly gcp: DataDatadogActionConnectionGcpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference">DataDatadogActionConnectionGcpOutputReference</a>

---

##### `gemini`<sup>Required</sup> <a name="gemini" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gemini"></a>

```typescript
public readonly gemini: DataDatadogActionConnectionGeminiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference">DataDatadogActionConnectionGeminiOutputReference</a>

---

##### `gitlab`<sup>Required</sup> <a name="gitlab" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gitlab"></a>

```typescript
public readonly gitlab: DataDatadogActionConnectionGitlabOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference">DataDatadogActionConnectionGitlabOutputReference</a>

---

##### `greyNoise`<sup>Required</sup> <a name="greyNoise" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.greyNoise"></a>

```typescript
public readonly greyNoise: DataDatadogActionConnectionGreyNoiseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference">DataDatadogActionConnectionGreyNoiseOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.http"></a>

```typescript
public readonly http: DataDatadogActionConnectionHttpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference">DataDatadogActionConnectionHttpOutputReference</a>

---

##### `launchDarkly`<sup>Required</sup> <a name="launchDarkly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.launchDarkly"></a>

```typescript
public readonly launchDarkly: DataDatadogActionConnectionLaunchDarklyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference">DataDatadogActionConnectionLaunchDarklyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notion`<sup>Required</sup> <a name="notion" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.notion"></a>

```typescript
public readonly notion: DataDatadogActionConnectionNotionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference">DataDatadogActionConnectionNotionOutputReference</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.okta"></a>

```typescript
public readonly okta: DataDatadogActionConnectionOktaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference">DataDatadogActionConnectionOktaOutputReference</a>

---

##### `openai`<sup>Required</sup> <a name="openai" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.openai"></a>

```typescript
public readonly openai: DataDatadogActionConnectionOpenaiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference">DataDatadogActionConnectionOpenaiOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataDatadogActionConnectionServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference">DataDatadogActionConnectionServiceNowOutputReference</a>

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.split"></a>

```typescript
public readonly split: DataDatadogActionConnectionSplitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference">DataDatadogActionConnectionSplitOutputReference</a>

---

##### `statsig`<sup>Required</sup> <a name="statsig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.statsig"></a>

```typescript
public readonly statsig: DataDatadogActionConnectionStatsigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference">DataDatadogActionConnectionStatsigOutputReference</a>

---

##### `virusTotal`<sup>Required</sup> <a name="virusTotal" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.virusTotal"></a>

```typescript
public readonly virusTotal: DataDatadogActionConnectionVirusTotalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference">DataDatadogActionConnectionVirusTotalOutputReference</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.httpInput"></a>

```typescript
public readonly httpInput: IResolvable | DataDatadogActionConnectionHttp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogActionConnectionAnthropic <a name="DataDatadogActionConnectionAnthropic" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropic.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAnthropic: dataDatadogActionConnection.DataDatadogActionConnectionAnthropic = { ... }
```


### DataDatadogActionConnectionAnthropicApiKey <a name="DataDatadogActionConnectionAnthropicApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAnthropicApiKey: dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey = { ... }
```


### DataDatadogActionConnectionAsana <a name="DataDatadogActionConnectionAsana" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsana.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAsana: dataDatadogActionConnection.DataDatadogActionConnectionAsana = { ... }
```


### DataDatadogActionConnectionAsanaAccessToken <a name="DataDatadogActionConnectionAsanaAccessToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAsanaAccessToken: dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken = { ... }
```


### DataDatadogActionConnectionAws <a name="DataDatadogActionConnectionAws" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAws: dataDatadogActionConnection.DataDatadogActionConnectionAws = { ... }
```


### DataDatadogActionConnectionAwsAssumeRole <a name="DataDatadogActionConnectionAwsAssumeRole" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAwsAssumeRole: dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole = { ... }
```


### DataDatadogActionConnectionAzure <a name="DataDatadogActionConnectionAzure" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzure.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAzure: dataDatadogActionConnection.DataDatadogActionConnectionAzure = { ... }
```


### DataDatadogActionConnectionAzureTenant <a name="DataDatadogActionConnectionAzureTenant" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionAzureTenant: dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant = { ... }
```


### DataDatadogActionConnectionCircleCi <a name="DataDatadogActionConnectionCircleCi" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCi.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionCircleCi: dataDatadogActionConnection.DataDatadogActionConnectionCircleCi = { ... }
```


### DataDatadogActionConnectionCircleCiApiKey <a name="DataDatadogActionConnectionCircleCiApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionCircleCiApiKey: dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey = { ... }
```


### DataDatadogActionConnectionClickup <a name="DataDatadogActionConnectionClickup" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickup.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionClickup: dataDatadogActionConnection.DataDatadogActionConnectionClickup = { ... }
```


### DataDatadogActionConnectionClickupApiKey <a name="DataDatadogActionConnectionClickupApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionClickupApiKey: dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey = { ... }
```


### DataDatadogActionConnectionCloudflare <a name="DataDatadogActionConnectionCloudflare" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflare"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflare.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionCloudflare: dataDatadogActionConnection.DataDatadogActionConnectionCloudflare = { ... }
```


### DataDatadogActionConnectionCloudflareApiToken <a name="DataDatadogActionConnectionCloudflareApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionCloudflareApiToken: dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken = { ... }
```


### DataDatadogActionConnectionCloudflareGlobalApiToken <a name="DataDatadogActionConnectionCloudflareGlobalApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionCloudflareGlobalApiToken: dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken = { ... }
```


### DataDatadogActionConnectionConfig <a name="DataDatadogActionConnectionConfig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionConfig: dataDatadogActionConnection.DataDatadogActionConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.id">id</a></code> | <code>string</code> | ID for Connection. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.http">http</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | http block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID for Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#id DataDatadogActionConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.http"></a>

```typescript
public readonly http: DataDatadogActionConnectionHttp;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#http DataDatadogActionConnection#http}

---

### DataDatadogActionConnectionConfigCat <a name="DataDatadogActionConnectionConfigCat" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCat.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionConfigCat: dataDatadogActionConnection.DataDatadogActionConnectionConfigCat = { ... }
```


### DataDatadogActionConnectionConfigCatSdkKey <a name="DataDatadogActionConnectionConfigCatSdkKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionConfigCatSdkKey: dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey = { ... }
```


### DataDatadogActionConnectionDatadog <a name="DataDatadogActionConnectionDatadog" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadog.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionDatadog: dataDatadogActionConnection.DataDatadogActionConnectionDatadog = { ... }
```


### DataDatadogActionConnectionDatadogApiKey <a name="DataDatadogActionConnectionDatadogApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionDatadogApiKey: dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey = { ... }
```


### DataDatadogActionConnectionFastly <a name="DataDatadogActionConnectionFastly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastly.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionFastly: dataDatadogActionConnection.DataDatadogActionConnectionFastly = { ... }
```


### DataDatadogActionConnectionFastlyApiKey <a name="DataDatadogActionConnectionFastlyApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionFastlyApiKey: dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey = { ... }
```


### DataDatadogActionConnectionFreshservice <a name="DataDatadogActionConnectionFreshservice" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshservice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshservice.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionFreshservice: dataDatadogActionConnection.DataDatadogActionConnectionFreshservice = { ... }
```


### DataDatadogActionConnectionFreshserviceApiKey <a name="DataDatadogActionConnectionFreshserviceApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionFreshserviceApiKey: dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey = { ... }
```


### DataDatadogActionConnectionGcp <a name="DataDatadogActionConnectionGcp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcp.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGcp: dataDatadogActionConnection.DataDatadogActionConnectionGcp = { ... }
```


### DataDatadogActionConnectionGcpServiceAccount <a name="DataDatadogActionConnectionGcpServiceAccount" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGcpServiceAccount: dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount = { ... }
```


### DataDatadogActionConnectionGemini <a name="DataDatadogActionConnectionGemini" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGemini"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGemini.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGemini: dataDatadogActionConnection.DataDatadogActionConnectionGemini = { ... }
```


### DataDatadogActionConnectionGeminiApiKey <a name="DataDatadogActionConnectionGeminiApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGeminiApiKey: dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey = { ... }
```


### DataDatadogActionConnectionGitlab <a name="DataDatadogActionConnectionGitlab" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlab.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGitlab: dataDatadogActionConnection.DataDatadogActionConnectionGitlab = { ... }
```


### DataDatadogActionConnectionGitlabApiKey <a name="DataDatadogActionConnectionGitlabApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGitlabApiKey: dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey = { ... }
```


### DataDatadogActionConnectionGreyNoise <a name="DataDatadogActionConnectionGreyNoise" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGreyNoise: dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise = { ... }
```


### DataDatadogActionConnectionGreyNoiseApiKey <a name="DataDatadogActionConnectionGreyNoiseApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionGreyNoiseApiKey: dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey = { ... }
```


### DataDatadogActionConnectionHttp <a name="DataDatadogActionConnectionHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionHttp: dataDatadogActionConnection.DataDatadogActionConnectionHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.property.tokenAuth">tokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | token_auth block. |

---

##### `tokenAuth`<sup>Optional</sup> <a name="tokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.property.tokenAuth"></a>

```typescript
public readonly tokenAuth: DataDatadogActionConnectionHttpTokenAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#token_auth DataDatadogActionConnection#token_auth}

---

### DataDatadogActionConnectionHttpTokenAuth <a name="DataDatadogActionConnectionHttpTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionHttpTokenAuth: dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.header">header</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]</code> | header block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.token">token</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]</code> | token block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.urlParameter">urlParameter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | url_parameter block. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.header"></a>

```typescript
public readonly header: IResolvable | DataDatadogActionConnectionHttpTokenAuthHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#header DataDatadogActionConnection#header}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.token"></a>

```typescript
public readonly token: IResolvable | DataDatadogActionConnectionHttpTokenAuthToken[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#token DataDatadogActionConnection#token}

---

##### `urlParameter`<sup>Optional</sup> <a name="urlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.urlParameter"></a>

```typescript
public readonly urlParameter: IResolvable | DataDatadogActionConnectionHttpTokenAuthUrlParameter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

url_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#url_parameter DataDatadogActionConnection#url_parameter}

---

### DataDatadogActionConnectionHttpTokenAuthBody <a name="DataDatadogActionConnectionHttpTokenAuthBody" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionHttpTokenAuthBody: dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody = { ... }
```


### DataDatadogActionConnectionHttpTokenAuthHeader <a name="DataDatadogActionConnectionHttpTokenAuthHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionHttpTokenAuthHeader: dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader = { ... }
```


### DataDatadogActionConnectionHttpTokenAuthToken <a name="DataDatadogActionConnectionHttpTokenAuthToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionHttpTokenAuthToken: dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken = { ... }
```


### DataDatadogActionConnectionHttpTokenAuthUrlParameter <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionHttpTokenAuthUrlParameter: dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter = { ... }
```


### DataDatadogActionConnectionLaunchDarkly <a name="DataDatadogActionConnectionLaunchDarkly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionLaunchDarkly: dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly = { ... }
```


### DataDatadogActionConnectionLaunchDarklyApiKey <a name="DataDatadogActionConnectionLaunchDarklyApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionLaunchDarklyApiKey: dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey = { ... }
```


### DataDatadogActionConnectionNotion <a name="DataDatadogActionConnectionNotion" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotion.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionNotion: dataDatadogActionConnection.DataDatadogActionConnectionNotion = { ... }
```


### DataDatadogActionConnectionNotionApiKey <a name="DataDatadogActionConnectionNotionApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionNotionApiKey: dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey = { ... }
```


### DataDatadogActionConnectionOkta <a name="DataDatadogActionConnectionOkta" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOkta"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOkta.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionOkta: dataDatadogActionConnection.DataDatadogActionConnectionOkta = { ... }
```


### DataDatadogActionConnectionOktaApiToken <a name="DataDatadogActionConnectionOktaApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionOktaApiToken: dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken = { ... }
```


### DataDatadogActionConnectionOpenai <a name="DataDatadogActionConnectionOpenai" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenai.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionOpenai: dataDatadogActionConnection.DataDatadogActionConnectionOpenai = { ... }
```


### DataDatadogActionConnectionOpenaiApiKey <a name="DataDatadogActionConnectionOpenaiApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionOpenaiApiKey: dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey = { ... }
```


### DataDatadogActionConnectionServiceNow <a name="DataDatadogActionConnectionServiceNow" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNow.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionServiceNow: dataDatadogActionConnection.DataDatadogActionConnectionServiceNow = { ... }
```


### DataDatadogActionConnectionServiceNowBasicAuth <a name="DataDatadogActionConnectionServiceNowBasicAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionServiceNowBasicAuth: dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth = { ... }
```


### DataDatadogActionConnectionSplit <a name="DataDatadogActionConnectionSplit" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplit.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionSplit: dataDatadogActionConnection.DataDatadogActionConnectionSplit = { ... }
```


### DataDatadogActionConnectionSplitApiKey <a name="DataDatadogActionConnectionSplitApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionSplitApiKey: dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey = { ... }
```


### DataDatadogActionConnectionStatsig <a name="DataDatadogActionConnectionStatsig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsig.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionStatsig: dataDatadogActionConnection.DataDatadogActionConnectionStatsig = { ... }
```


### DataDatadogActionConnectionStatsigApiKey <a name="DataDatadogActionConnectionStatsigApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionStatsigApiKey: dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey = { ... }
```


### DataDatadogActionConnectionVirusTotal <a name="DataDatadogActionConnectionVirusTotal" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionVirusTotal: dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal = { ... }
```


### DataDatadogActionConnectionVirusTotalApiKey <a name="DataDatadogActionConnectionVirusTotalApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

const dataDatadogActionConnectionVirusTotalApiKey: dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogActionConnectionAnthropicApiKeyOutputReference <a name="DataDatadogActionConnectionAnthropicApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey">DataDatadogActionConnectionAnthropicApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAnthropicApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey">DataDatadogActionConnectionAnthropicApiKey</a>

---


### DataDatadogActionConnectionAnthropicOutputReference <a name="DataDatadogActionConnectionAnthropicOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference">DataDatadogActionConnectionAnthropicApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropic">DataDatadogActionConnectionAnthropic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionAnthropicApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference">DataDatadogActionConnectionAnthropicApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAnthropic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropic">DataDatadogActionConnectionAnthropic</a>

---


### DataDatadogActionConnectionAsanaAccessTokenOutputReference <a name="DataDatadogActionConnectionAsanaAccessTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken">DataDatadogActionConnectionAsanaAccessToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAsanaAccessToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken">DataDatadogActionConnectionAsanaAccessToken</a>

---


### DataDatadogActionConnectionAsanaOutputReference <a name="DataDatadogActionConnectionAsanaOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.accessToken">accessToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference">DataDatadogActionConnectionAsanaAccessTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsana">DataDatadogActionConnectionAsana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: DataDatadogActionConnectionAsanaAccessTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference">DataDatadogActionConnectionAsanaAccessTokenOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAsana;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsana">DataDatadogActionConnectionAsana</a>

---


### DataDatadogActionConnectionAwsAssumeRoleOutputReference <a name="DataDatadogActionConnectionAwsAssumeRoleOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole">DataDatadogActionConnectionAwsAssumeRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAwsAssumeRole;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole">DataDatadogActionConnectionAwsAssumeRole</a>

---


### DataDatadogActionConnectionAwsOutputReference <a name="DataDatadogActionConnectionAwsOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference">DataDatadogActionConnectionAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws">DataDatadogActionConnectionAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.assumeRole"></a>

```typescript
public readonly assumeRole: DataDatadogActionConnectionAwsAssumeRoleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference">DataDatadogActionConnectionAwsAssumeRoleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws">DataDatadogActionConnectionAws</a>

---


### DataDatadogActionConnectionAzureOutputReference <a name="DataDatadogActionConnectionAzureOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.tenant">tenant</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference">DataDatadogActionConnectionAzureTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzure">DataDatadogActionConnectionAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.tenant"></a>

```typescript
public readonly tenant: DataDatadogActionConnectionAzureTenantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference">DataDatadogActionConnectionAzureTenantOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAzure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzure">DataDatadogActionConnectionAzure</a>

---


### DataDatadogActionConnectionAzureTenantOutputReference <a name="DataDatadogActionConnectionAzureTenantOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.appClientId">appClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.customScopes">customScopes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant">DataDatadogActionConnectionAzureTenant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appClientId`<sup>Required</sup> <a name="appClientId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.appClientId"></a>

```typescript
public readonly appClientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `customScopes`<sup>Required</sup> <a name="customScopes" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.customScopes"></a>

```typescript
public readonly customScopes: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionAzureTenant;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant">DataDatadogActionConnectionAzureTenant</a>

---


### DataDatadogActionConnectionCircleCiApiKeyOutputReference <a name="DataDatadogActionConnectionCircleCiApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey">DataDatadogActionConnectionCircleCiApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionCircleCiApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey">DataDatadogActionConnectionCircleCiApiKey</a>

---


### DataDatadogActionConnectionCircleCiOutputReference <a name="DataDatadogActionConnectionCircleCiOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference">DataDatadogActionConnectionCircleCiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCi">DataDatadogActionConnectionCircleCi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionCircleCiApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference">DataDatadogActionConnectionCircleCiApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionCircleCi;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCi">DataDatadogActionConnectionCircleCi</a>

---


### DataDatadogActionConnectionClickupApiKeyOutputReference <a name="DataDatadogActionConnectionClickupApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey">DataDatadogActionConnectionClickupApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionClickupApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey">DataDatadogActionConnectionClickupApiKey</a>

---


### DataDatadogActionConnectionClickupOutputReference <a name="DataDatadogActionConnectionClickupOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference">DataDatadogActionConnectionClickupApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickup">DataDatadogActionConnectionClickup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionClickupApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference">DataDatadogActionConnectionClickupApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionClickup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickup">DataDatadogActionConnectionClickup</a>

---


### DataDatadogActionConnectionCloudflareApiTokenOutputReference <a name="DataDatadogActionConnectionCloudflareApiTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken">DataDatadogActionConnectionCloudflareApiToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionCloudflareApiToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken">DataDatadogActionConnectionCloudflareApiToken</a>

---


### DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference <a name="DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmail">authEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKey">globalApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken">DataDatadogActionConnectionCloudflareGlobalApiToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authEmail`<sup>Required</sup> <a name="authEmail" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmail"></a>

```typescript
public readonly authEmail: string;
```

- *Type:* string

---

##### `globalApiKey`<sup>Required</sup> <a name="globalApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKey"></a>

```typescript
public readonly globalApiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionCloudflareGlobalApiToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken">DataDatadogActionConnectionCloudflareGlobalApiToken</a>

---


### DataDatadogActionConnectionCloudflareOutputReference <a name="DataDatadogActionConnectionCloudflareOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.apiToken">apiToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference">DataDatadogActionConnectionCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.globalApiToken">globalApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference">DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflare">DataDatadogActionConnectionCloudflare</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: DataDatadogActionConnectionCloudflareApiTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference">DataDatadogActionConnectionCloudflareApiTokenOutputReference</a>

---

##### `globalApiToken`<sup>Required</sup> <a name="globalApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.globalApiToken"></a>

```typescript
public readonly globalApiToken: DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference">DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionCloudflare;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflare">DataDatadogActionConnectionCloudflare</a>

---


### DataDatadogActionConnectionConfigCatOutputReference <a name="DataDatadogActionConnectionConfigCatOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.sdkKey">sdkKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference">DataDatadogActionConnectionConfigCatSdkKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCat">DataDatadogActionConnectionConfigCat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sdkKey`<sup>Required</sup> <a name="sdkKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.sdkKey"></a>

```typescript
public readonly sdkKey: DataDatadogActionConnectionConfigCatSdkKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference">DataDatadogActionConnectionConfigCatSdkKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionConfigCat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCat">DataDatadogActionConnectionConfigCat</a>

---


### DataDatadogActionConnectionConfigCatSdkKeyOutputReference <a name="DataDatadogActionConnectionConfigCatSdkKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiPassword">apiPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiUsername">apiUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.sdkKey">sdkKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey">DataDatadogActionConnectionConfigCatSdkKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiPassword`<sup>Required</sup> <a name="apiPassword" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiPassword"></a>

```typescript
public readonly apiPassword: string;
```

- *Type:* string

---

##### `apiUsername`<sup>Required</sup> <a name="apiUsername" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiUsername"></a>

```typescript
public readonly apiUsername: string;
```

- *Type:* string

---

##### `sdkKey`<sup>Required</sup> <a name="sdkKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.sdkKey"></a>

```typescript
public readonly sdkKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionConfigCatSdkKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey">DataDatadogActionConnectionConfigCatSdkKey</a>

---


### DataDatadogActionConnectionDatadogApiKeyOutputReference <a name="DataDatadogActionConnectionDatadogApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey">DataDatadogActionConnectionDatadogApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionDatadogApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey">DataDatadogActionConnectionDatadogApiKey</a>

---


### DataDatadogActionConnectionDatadogOutputReference <a name="DataDatadogActionConnectionDatadogOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference">DataDatadogActionConnectionDatadogApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadog">DataDatadogActionConnectionDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionDatadogApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference">DataDatadogActionConnectionDatadogApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionDatadog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadog">DataDatadogActionConnectionDatadog</a>

---


### DataDatadogActionConnectionFastlyApiKeyOutputReference <a name="DataDatadogActionConnectionFastlyApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey">DataDatadogActionConnectionFastlyApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionFastlyApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey">DataDatadogActionConnectionFastlyApiKey</a>

---


### DataDatadogActionConnectionFastlyOutputReference <a name="DataDatadogActionConnectionFastlyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference">DataDatadogActionConnectionFastlyApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastly">DataDatadogActionConnectionFastly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionFastlyApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference">DataDatadogActionConnectionFastlyApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionFastly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastly">DataDatadogActionConnectionFastly</a>

---


### DataDatadogActionConnectionFreshserviceApiKeyOutputReference <a name="DataDatadogActionConnectionFreshserviceApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey">DataDatadogActionConnectionFreshserviceApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionFreshserviceApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey">DataDatadogActionConnectionFreshserviceApiKey</a>

---


### DataDatadogActionConnectionFreshserviceOutputReference <a name="DataDatadogActionConnectionFreshserviceOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference">DataDatadogActionConnectionFreshserviceApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshservice">DataDatadogActionConnectionFreshservice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionFreshserviceApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference">DataDatadogActionConnectionFreshserviceApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionFreshservice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshservice">DataDatadogActionConnectionFreshservice</a>

---


### DataDatadogActionConnectionGcpOutputReference <a name="DataDatadogActionConnectionGcpOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference">DataDatadogActionConnectionGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcp">DataDatadogActionConnectionGcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: DataDatadogActionConnectionGcpServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference">DataDatadogActionConnectionGcpServiceAccountOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcp">DataDatadogActionConnectionGcp</a>

---


### DataDatadogActionConnectionGcpServiceAccountOutputReference <a name="DataDatadogActionConnectionGcpServiceAccountOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount">DataDatadogActionConnectionGcpServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGcpServiceAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount">DataDatadogActionConnectionGcpServiceAccount</a>

---


### DataDatadogActionConnectionGeminiApiKeyOutputReference <a name="DataDatadogActionConnectionGeminiApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey">DataDatadogActionConnectionGeminiApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGeminiApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey">DataDatadogActionConnectionGeminiApiKey</a>

---


### DataDatadogActionConnectionGeminiOutputReference <a name="DataDatadogActionConnectionGeminiOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference">DataDatadogActionConnectionGeminiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGemini">DataDatadogActionConnectionGemini</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionGeminiApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference">DataDatadogActionConnectionGeminiApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGemini;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGemini">DataDatadogActionConnectionGemini</a>

---


### DataDatadogActionConnectionGitlabApiKeyOutputReference <a name="DataDatadogActionConnectionGitlabApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey">DataDatadogActionConnectionGitlabApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGitlabApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey">DataDatadogActionConnectionGitlabApiKey</a>

---


### DataDatadogActionConnectionGitlabOutputReference <a name="DataDatadogActionConnectionGitlabOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference">DataDatadogActionConnectionGitlabApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlab">DataDatadogActionConnectionGitlab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionGitlabApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference">DataDatadogActionConnectionGitlabApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGitlab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlab">DataDatadogActionConnectionGitlab</a>

---


### DataDatadogActionConnectionGreyNoiseApiKeyOutputReference <a name="DataDatadogActionConnectionGreyNoiseApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey">DataDatadogActionConnectionGreyNoiseApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGreyNoiseApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey">DataDatadogActionConnectionGreyNoiseApiKey</a>

---


### DataDatadogActionConnectionGreyNoiseOutputReference <a name="DataDatadogActionConnectionGreyNoiseOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference">DataDatadogActionConnectionGreyNoiseApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise">DataDatadogActionConnectionGreyNoise</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionGreyNoiseApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference">DataDatadogActionConnectionGreyNoiseApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionGreyNoise;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise">DataDatadogActionConnectionGreyNoise</a>

---


### DataDatadogActionConnectionHttpOutputReference <a name="DataDatadogActionConnectionHttpOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth">putTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resetTokenAuth">resetTokenAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTokenAuth` <a name="putTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth"></a>

```typescript
public putTokenAuth(value: DataDatadogActionConnectionHttpTokenAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---

##### `resetTokenAuth` <a name="resetTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resetTokenAuth"></a>

```typescript
public resetTokenAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuth">tokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference">DataDatadogActionConnectionHttpTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuthInput">tokenAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `tokenAuth`<sup>Required</sup> <a name="tokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuth"></a>

```typescript
public readonly tokenAuth: DataDatadogActionConnectionHttpTokenAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference">DataDatadogActionConnectionHttpTokenAuthOutputReference</a>

---

##### `tokenAuthInput`<sup>Optional</sup> <a name="tokenAuthInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuthInput"></a>

```typescript
public readonly tokenAuthInput: IResolvable | DataDatadogActionConnectionHttpTokenAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---


### DataDatadogActionConnectionHttpTokenAuthBodyOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthBodyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody">DataDatadogActionConnectionHttpTokenAuthBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody">DataDatadogActionConnectionHttpTokenAuthBody</a>

---


### DataDatadogActionConnectionHttpTokenAuthHeaderList <a name="DataDatadogActionConnectionHttpTokenAuthHeaderList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get"></a>

```typescript
public get(index: number): DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

---


### DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>

---


### DataDatadogActionConnectionHttpTokenAuthOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter">putUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetUrlParameter">resetUrlParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | DataDatadogActionConnectionHttpTokenAuthHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

---

##### `putToken` <a name="putToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken"></a>

```typescript
public putToken(value: IResolvable | DataDatadogActionConnectionHttpTokenAuthToken[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

---

##### `putUrlParameter` <a name="putUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter"></a>

```typescript
public putUrlParameter(value: IResolvable | DataDatadogActionConnectionHttpTokenAuthUrlParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

---

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUrlParameter` <a name="resetUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetUrlParameter"></a>

```typescript
public resetUrlParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference">DataDatadogActionConnectionHttpTokenAuthBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList">DataDatadogActionConnectionHttpTokenAuthHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.token">token</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList">DataDatadogActionConnectionHttpTokenAuthTokenList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameter">urlParameter</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList">DataDatadogActionConnectionHttpTokenAuthUrlParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.headerInput">headerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.tokenInput">tokenInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput">urlParameterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.body"></a>

```typescript
public readonly body: DataDatadogActionConnectionHttpTokenAuthBodyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference">DataDatadogActionConnectionHttpTokenAuthBodyOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.header"></a>

```typescript
public readonly header: DataDatadogActionConnectionHttpTokenAuthHeaderList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList">DataDatadogActionConnectionHttpTokenAuthHeaderList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.token"></a>

```typescript
public readonly token: DataDatadogActionConnectionHttpTokenAuthTokenList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList">DataDatadogActionConnectionHttpTokenAuthTokenList</a>

---

##### `urlParameter`<sup>Required</sup> <a name="urlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameter"></a>

```typescript
public readonly urlParameter: DataDatadogActionConnectionHttpTokenAuthUrlParameterList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList">DataDatadogActionConnectionHttpTokenAuthUrlParameterList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | DataDatadogActionConnectionHttpTokenAuthHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: IResolvable | DataDatadogActionConnectionHttpTokenAuthToken[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

---

##### `urlParameterInput`<sup>Optional</sup> <a name="urlParameterInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput"></a>

```typescript
public readonly urlParameterInput: IResolvable | DataDatadogActionConnectionHttpTokenAuthUrlParameter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---


### DataDatadogActionConnectionHttpTokenAuthTokenList <a name="DataDatadogActionConnectionHttpTokenAuthTokenList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get"></a>

```typescript
public get(index: number): DataDatadogActionConnectionHttpTokenAuthTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthToken[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

---


### DataDatadogActionConnectionHttpTokenAuthTokenOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>

---


### DataDatadogActionConnectionHttpTokenAuthUrlParameterList <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameterList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get"></a>

```typescript
public get(index: number): DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthUrlParameter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

---


### DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionHttpTokenAuthUrlParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>

---


### DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference <a name="DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey">DataDatadogActionConnectionLaunchDarklyApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionLaunchDarklyApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey">DataDatadogActionConnectionLaunchDarklyApiKey</a>

---


### DataDatadogActionConnectionLaunchDarklyOutputReference <a name="DataDatadogActionConnectionLaunchDarklyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference">DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly">DataDatadogActionConnectionLaunchDarkly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference">DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionLaunchDarkly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly">DataDatadogActionConnectionLaunchDarkly</a>

---


### DataDatadogActionConnectionNotionApiKeyOutputReference <a name="DataDatadogActionConnectionNotionApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey">DataDatadogActionConnectionNotionApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionNotionApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey">DataDatadogActionConnectionNotionApiKey</a>

---


### DataDatadogActionConnectionNotionOutputReference <a name="DataDatadogActionConnectionNotionOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference">DataDatadogActionConnectionNotionApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotion">DataDatadogActionConnectionNotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionNotionApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference">DataDatadogActionConnectionNotionApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionNotion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotion">DataDatadogActionConnectionNotion</a>

---


### DataDatadogActionConnectionOktaApiTokenOutputReference <a name="DataDatadogActionConnectionOktaApiTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken">DataDatadogActionConnectionOktaApiToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionOktaApiToken;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken">DataDatadogActionConnectionOktaApiToken</a>

---


### DataDatadogActionConnectionOktaOutputReference <a name="DataDatadogActionConnectionOktaOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.apiToken">apiToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference">DataDatadogActionConnectionOktaApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOkta">DataDatadogActionConnectionOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: DataDatadogActionConnectionOktaApiTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference">DataDatadogActionConnectionOktaApiTokenOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionOkta;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOkta">DataDatadogActionConnectionOkta</a>

---


### DataDatadogActionConnectionOpenaiApiKeyOutputReference <a name="DataDatadogActionConnectionOpenaiApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey">DataDatadogActionConnectionOpenaiApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionOpenaiApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey">DataDatadogActionConnectionOpenaiApiKey</a>

---


### DataDatadogActionConnectionOpenaiOutputReference <a name="DataDatadogActionConnectionOpenaiOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference">DataDatadogActionConnectionOpenaiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenai">DataDatadogActionConnectionOpenai</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionOpenaiApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference">DataDatadogActionConnectionOpenaiApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionOpenai;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenai">DataDatadogActionConnectionOpenai</a>

---


### DataDatadogActionConnectionServiceNowBasicAuthOutputReference <a name="DataDatadogActionConnectionServiceNowBasicAuthOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth">DataDatadogActionConnectionServiceNowBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionServiceNowBasicAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth">DataDatadogActionConnectionServiceNowBasicAuth</a>

---


### DataDatadogActionConnectionServiceNowOutputReference <a name="DataDatadogActionConnectionServiceNowOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference">DataDatadogActionConnectionServiceNowBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNow">DataDatadogActionConnectionServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: DataDatadogActionConnectionServiceNowBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference">DataDatadogActionConnectionServiceNowBasicAuthOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNow">DataDatadogActionConnectionServiceNow</a>

---


### DataDatadogActionConnectionSplitApiKeyOutputReference <a name="DataDatadogActionConnectionSplitApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey">DataDatadogActionConnectionSplitApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionSplitApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey">DataDatadogActionConnectionSplitApiKey</a>

---


### DataDatadogActionConnectionSplitOutputReference <a name="DataDatadogActionConnectionSplitOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference">DataDatadogActionConnectionSplitApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplit">DataDatadogActionConnectionSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionSplitApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference">DataDatadogActionConnectionSplitApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionSplit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplit">DataDatadogActionConnectionSplit</a>

---


### DataDatadogActionConnectionStatsigApiKeyOutputReference <a name="DataDatadogActionConnectionStatsigApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey">DataDatadogActionConnectionStatsigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionStatsigApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey">DataDatadogActionConnectionStatsigApiKey</a>

---


### DataDatadogActionConnectionStatsigOutputReference <a name="DataDatadogActionConnectionStatsigOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference">DataDatadogActionConnectionStatsigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsig">DataDatadogActionConnectionStatsig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionStatsigApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference">DataDatadogActionConnectionStatsigApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionStatsig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsig">DataDatadogActionConnectionStatsig</a>

---


### DataDatadogActionConnectionVirusTotalApiKeyOutputReference <a name="DataDatadogActionConnectionVirusTotalApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey">DataDatadogActionConnectionVirusTotalApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionVirusTotalApiKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey">DataDatadogActionConnectionVirusTotalApiKey</a>

---


### DataDatadogActionConnectionVirusTotalOutputReference <a name="DataDatadogActionConnectionVirusTotalOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer"></a>

```typescript
import { dataDatadogActionConnection } from '@cdktn/provider-datadog'

new dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference">DataDatadogActionConnectionVirusTotalApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal">DataDatadogActionConnectionVirusTotal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: DataDatadogActionConnectionVirusTotalApiKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference">DataDatadogActionConnectionVirusTotalApiKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogActionConnectionVirusTotal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal">DataDatadogActionConnectionVirusTotal</a>

---



